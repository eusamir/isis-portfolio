'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

interface ImagesContainerProps {
  src: string
}

export function ImagesContainer({ src }: ImagesContainerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="overflow-hidden rounded-sm md:rounded-2xl"
      key={src}
    >
      <Image
        src={src}
        alt="Imagem"
        width={600}
        height={280}
        className="object-cover w-full rounded-sm md:rounded-2xl"
      />
    </motion.div>
  )
}
