
import { images } from "@/config/images";
import { styles } from "@/config/styles";
import Text from "../ui/Text";

export function Hero() {
  return (
    <section className={styles.hero.section}>
      <picture className={styles.hero.background}>
        <source
          media="(max-width: 767px)"
          srcSet={images.studioMobile}
        />

        <img
          src={images.studio}
          alt=""
          fetchPriority="high"
          className={styles.hero.backgroundImage}
        />
      </picture>

      <div className={styles.hero.content}>
        <Text>
          <span className={styles.text.item}>
            Web Designer
            <br className="md:hidden" />
          </span>

          <span className={styles.text.itemRight}>
            Desenvolvedor
            <br className="md:hidden" />
            {" "}Full-Stack
          </span>
        </Text>
      </div>
    </section>
  );
}