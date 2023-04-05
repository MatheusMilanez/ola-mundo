import styles from "./SobreMim.module.css"

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/foto_sobre_mim.png";

export default function SobreMim(){
    return(
        <PostModelo 
            fotoCapa={fotoCapa}
            titulo="Sobre Mim"
        >
            <h3 className={styles.subtitulo}>
                Olá , eu sou o Matheus!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Matheus Milanez"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>Oi, tudo bem? Eu sou desenvolvedor  Front-end React e estou feliz de te ver por aqui.</p>

           <p className={styles.paragrafo}> Minha história com programação começou no Universidade São José (UNISÃOJOSÉ), onde faço curso de tecnólogo em sistemas de informação. Eu aprendi lógica de programação e o básico de várias linguagens, como C, JavaScript, Java, mas sem aprofundar muito em cada uma delas. Eu gostava muito de estudar programação.</p>

           <p className={styles.paragrafo}>Na Alura e na Danki-Code, escolhi cursar Front-end. Lá eu consegui estudar HTML5, CSS3, JAVASCRIPT e REACT.</p>

            <p className={styles.paragrafo}>Logo em seguida tive a oportunidade de estagiar na empresa Inteligir como programador front-end, desenolvendo as principais paginas da aplicação web.</p>

            <p className={styles.paragrafo}>Com isso tive minha experiência de dev mais próxima da realidade, com prazos de implementação para o site, e aprendi muito enquanto codificava.</p>

            <p className={styles.paragrafo}>Desde então, tem sido apenas aprendizados atrás de aprendizados.</p>
        </PostModelo>
    );
}