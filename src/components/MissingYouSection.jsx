import { motion } from 'framer-motion'
import './MissingYouSection.css'

const lines = [
  'ووحشني عيونك وضحكتك يا أحلى وأجمل نفانيفو في الدنيا',
  'يعني بدوّر عليكي في أي زحمة، وعيني مش بتشوف غيرك',
  'يعني بفتح التليفون كل شوية أشوف رديتي ولا لسه',
  'يعني نفسي أشوفك كل يوم، ومهما شفتك عمري ما بشبع',
  'يعني حاسس إني ناقص حاجة، وانتي الحاجة دي',
  'يعني حتى وأنا بضحك وسط الناس، بكون بفكّر فيكي',
  'يعني أي يوم من غير صوتك بيعدّي تقيل عليا',
  'يعني كل حاجة حواليا بترجّعني ليكي',
  'يعني انتي أول واحدة بفكر فيها أول ما أصحى، وآخر واحدة قبل ما أنام',
  'يعني صوتك لوحده بيريّحني، ولو غاب شوية بحس إن يومي ناقص',
  'يعني من غيرك بحس إني تايه، وانتي اللي بترجّعيني لنفسي',
]

export default function MissingYouSection() {
  return (
    <section className="missing-section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="section-tag">وحشتيني</span>
        <h2 className="section-title">كلمة "وحشتيني" دي مش بسيطة خالص</h2>
        <p className="section-subtitle">
          فيها معاني كتير أوي، خليكي معايا لحد آخرها ♥
        </p>
      </motion.div>

      <div className="missing-list">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            className="missing-line"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: i * 0.06 }}
          >
            <span className="missing-heart">♥</span>
            <span className="missing-word">وحشتيني</span>
            <span className="missing-text">{line}</span>
          </motion.div>
        ))}
      </div>

      <motion.p
        className="missing-closing"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        وخلاصة الكلام كله.. وحشتيني بجد أوي يا نفين ♥♥
      </motion.p>
    </section>
  )
}
