/* ========================================
   Hero テキスト 読み込み時ふわっと登場

   IntersectionObserver 不要
   ページが読み込まれたら即発火
   delay: 0.4 で画像が表示されてから少し後に出る
======================================== */

gsap.from('.hero-text p', {
  opacity: 0,
  y: 30,
  duration: 1.2,
  ease: 'power2.out',
  delay: 0.4   /* 画像ロード後に少し間を置いて登場 */
});


/* ========================================
   Skills カード スタッガーアニメーション

   仕組み：
   IntersectionObserver で .skills-grid が
   画面に入った瞬間に GSAP を発火させる

   gsap.from() = 「この状態から」アニメーション開始
     opacity: 0  → 透明な状態から
     x: -30      → 左にずれた状態から
   stagger: 0.1  → 1枚ごとに0.1秒ずつ遅らせる
======================================== */

const skillsGrid = document.querySelector('.skills-grid');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {

      gsap.from('.skill-card', {
        opacity: 0,
        x: -30,
        duration: 0.5,
        stagger: 0.1,        /* カード1枚ごとに0.1秒遅延 */
        ease: 'power2.out'   /* 最初速く→最後ゆっくり */
      });

      observer.unobserve(entry.target); /* 一度だけ発火 */
    }
  });
}, {
  threshold: 0.2  /* 要素が20%見えたら発火 */
});

observer.observe(skillsGrid);
