import AnimatedText from "@/components/ui/AnimatedText";
import { styles } from "@/config/styles";

export default function About() {
  return (
    <section 
        id="about"
        className={styles.about.section}>
      <div className={styles.about.container}>
        <AnimatedText />
      </div>
    </section>
  );
}