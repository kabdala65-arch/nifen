import { motion } from 'framer-motion'
import './MeaningSection.css'

const letters = [
  { l: 'ن', text: 'نوّرتي حياتي من أول يوم، وبقت أحلى بوجودك' },
  { l: 'ف', text: 'فرحتي اللي بتكمّل أي يوم، وسبب ضحكتي' },
  { l: 'ي', text: 'يا أغلى وأحلى حد في قلبي، ومفيش حد زيك' },
  { l: 'ن', text: 'نفسي أفضل جنبك العمر كله، وآخر كلمة دايمًا: بحبك' },
]

export default function MeaningSection() {
  return (
    <section className="meaning-section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="section-tag">نفين</span>
        <h2 className="section-title">اسمك كله حكاية</h2>
        <p className="section-subtitle">
          كل حرف في اسمك ليه معنى عندي، ومن جوه قلبي ♥
        </p>
      </motion.div>

      <div className="meaning-grid">
        {letters.map((item, i) => (
          <motion.div
            key={i}
            className="meaning-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
          >
            <span className="meaning-letter">{item.l}</span>
            <span className="meaning-text">{item.text}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
