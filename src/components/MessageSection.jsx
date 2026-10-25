import { motion } from 'framer-motion'
import './MessageSection.css'

export default function MessageSection() {
  return (
    <section className="message-section">
      <motion.div
        className="message-wrapper"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="ring-glow-wrapper">
          <div className="ring-glow">
            <span className="ring-heart">♥</span>
          </div>
        </div>

        <h2 className="message-title">
          <span className="message-lead">يا أغلى إنسانة في حياتي...</span>
          <span className="signature">نفين ❤️</span>
        </h2>

        <motion.p
          className="message-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          مهما كتبت مش هعرف أقولك انتي مهمة عندي قد إيه، بس حبيت أعملّك المكان ده عشان تحسّي بيها ولو شوية.<br /><br />
          من 5/10/2025 وأنا كل يوم بكتشف فيكي حاجة جديدة تخليني أحبك أكتر.
          ضحكتك بتفرّحني، وعيونك بتطمّني، وأي يوم تقيل بيهون عليا أول ما أسمع صوتك.<br /><br />
          ولو الزمن رجع بيا ألف مرة، هختارك في كل مرة من غير ما أفكر.<br /><br />
          وعد مني: هفضل جنبك، هحترمك وأقدّرك وأصونك، وهكون معاكي في كل ظرف،
          حلو كان ولا صعب، وربنا يجمعنا في بيت واحد قريب إن شاء الله.
        </motion.p>

        <motion.div
          className="message-signature-line"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        />

        <motion.p
          className="message-from"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
        >
          بحبك يا نفين بجد، وربنا يخليكي ليا ويفضّل ضحكتك منوّرة حياتي طول العمر ❤️🌹
        </motion.p>
      </motion.div>
    </section>
  )
}
