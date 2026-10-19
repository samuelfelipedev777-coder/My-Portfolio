import { images } from "@/config/images";
import { styles } from "@/config/styles";

export function Hero() {
  return (
    <section
      className={styles.hero.section}
      style={{ backgroundImage: `url(${images.studio})`}}
    >
    </section>
  );
}