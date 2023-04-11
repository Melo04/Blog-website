import styles from '../styles/Layout.module.css'

export default function Layout({children, imgUrl}) {
  return (
    <div
      className="flex h-screen"
      style={{
        background: "#5433ff",
        background:
          "-webkit-linear-gradient(to right, #5433ff, #20bdff, #a5fecb)",
        background: "linear-gradient(to right, #5433ff, #20bdff, #a5fecb)",
      }}
    >
      <div className="m-auto bg-slate-50 rounded-md w-8/12 h-4/5 grid lg:grid-cols-2">
        <div className={styles.imgStyle}>
          <div className={styles.cartoonImg} style={{"--img-url": `url('${imgUrl}')`}}></div>

          <div className={styles.cloud_one}></div>
          <div className={styles.cloud_two}></div>
        </div>

        <div className="right flex flex-col justify-evenly">
          <div className="text-center py-10">{children}</div>
        </div>
      </div>
    </div>
  );
}
