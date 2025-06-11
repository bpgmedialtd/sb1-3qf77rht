"use client"

import * as React from "react"
import { HTMLMotionProps, motion, useScroll, useTransform } from "framer-motion"

import { cn } from "@/lib/utils"

interface CardStickyProps extends Omit<HTMLMotionProps<"div">, "ref"> {
  index: number
  incrementY?: number
  incrementZ?: number
}

const ContainerScroll = React.forwardRef<
  HTMLDivElement,
  React.HTMLProps<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("relative w-full", className)}
      style={{ perspective: "1000px", ...props.style }}
      {...props}
    >
      {children}
    </div>
  )
})
ContainerScroll.displayName = "ContainerScroll"

const CardSticky = React.forwardRef<HTMLDivElement, CardStickyProps>(
  (
    {
      index,
      incrementY = 10,
      incrementZ = 10,
      children,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const cardRef = React.useRef<HTMLDivElement>(null)
    const y = index * incrementY
    const zIndex = index * incrementZ

    // Combine the forwarded ref with the local ref
    const combinedRef = React.useCallback(
      (node: HTMLDivElement | null) => {
        // Type assertion to ensure TypeScript knows cardRef is mutable
        ;(cardRef as React.MutableRefObject<HTMLDivElement | null>).current = node
        if (typeof ref === 'function') {
          ref(node)
        } else if (ref) {
          ref.current = node
        }
      },
      [ref]
    )

    // Track scroll progress for this specific card
    const { scrollYProgress } = useScroll({
      target: cardRef,
      offset: ["start end", "end start"]
    })

    // Transform scroll progress to opacity values with discrete steps to prevent blur
    const opacity = useTransform(
      scrollYProgress, 
      [0.85, 0.95, 1], 
      [1, 0.8, 0.3],
      { clamp: true }
    )

    return (
      <motion.div
        ref={combinedRef}
        layout="position"
        style={{
          top: y,
          zIndex,
          backfaceVisibility: "hidden",
          opacity,
          // Add CSS properties to ensure crisp text rendering
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
          textRendering: "optimizeLegibility",
          ...style,
        }}
        className={cn("sticky", className)}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

CardSticky.displayName = "CardSticky"

export { ContainerScroll, CardSticky }