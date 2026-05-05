import { useEffect, useRef } from 'react'

const COLORS = ['#2563eb', '#8b5cf6', '#f97316', '#ec4899', '#3b82f6', '#d946ef']

class Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  color: string
  alpha: number
  life: number
  maxLife: number

  constructor(x: number, y: number) {
    this.x = x
    this.y = y
    const angle = Math.random() * Math.PI * 2
    const speed = Math.random() * 2 + 0.5
    this.vx = Math.cos(angle) * speed
    this.vy = Math.sin(angle) * speed
    this.size = Math.random() * 4 + 2
    this.color = COLORS[Math.floor(Math.random() * COLORS.length)]
    this.alpha = 1
    this.maxLife = Math.random() * 40 + 40
    this.life = this.maxLife
  }

  update() {
    this.x += this.vx
    this.y += this.vy
    this.life--
    this.alpha = Math.max(0, this.life / this.maxLife)
    this.size = Math.max(0.1, this.size * 0.96)
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save()
    ctx.globalAlpha = this.alpha
    ctx.fillStyle = this.color
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fill()
    ctx.restore()
  }
}

export function ParticleTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let particles: Particle[] = []
    let animationFrameId: number

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    let mouseX = -1000
    let mouseY = -1000

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      for (let i = 0; i < 3; i++) {
        particles.push(new Particle(mouseX, mouseY))
      }
    }

    const onTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0]
      if (touch) {
        mouseX = touch.clientX
        mouseY = touch.clientY
        for (let i = 0; i < 2; i++) {
          particles.push(new Particle(mouseX, mouseY))
        }
      }
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('touchmove', onTouchMove, { passive: true })

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.update()
        p.draw(ctx)
        if (p.life <= 0 || p.alpha <= 0) {
          particles.splice(i, 1)
        }
      }
      
      animationFrameId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('touchmove', onTouchMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-40 h-full w-full"
      aria-hidden="true"
    />
  )
}
