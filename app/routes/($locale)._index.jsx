import {motion} from 'framer-motion';
import {ShoppingBag, Heart} from 'lucide-react';

import img1 from '../assets/Set 1.jpg';
import img2 from '../assets/Set 2(4).jpg';
import img3 from '../assets/Set 3.jpg';
import img4 from '../assets/image (5).jpg';

export default function Homepage() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:0.8}}
      style={{background:'#f6efe9', fontFamily:'Arial'}}
    >

      {/* TOP BAR */}
      <div style={{
        background:'#171311',
        color:'#fff',
        textAlign:'center',
        padding:'10px',
        fontSize:'11px',
        letterSpacing:'0.28em'
      }}>
        Free shipping over $60 · Limited after dark drop
      </div>

      {/* NAV */}
      <header style={{
        position:'sticky',
        top:0,
        background:'#f6efe9',
        padding:'20px 40px',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        borderBottom:'1px solid rgba(0,0,0,0.05)',
        zIndex:10
      }}>
        <div>
          <div style={{fontSize:'10px', letterSpacing:'0.4em'}}>LINGERIE HOUSE</div>
          <div style={{fontSize:'24px', letterSpacing:'0.35em'}}>VELOURA</div>
        </div>

        <div style={{display:'flex', gap:'30px'}}>
          <span style={{cursor:'pointer'}} onClick={()=>scrollTo('new-in')}>New In</span>
          <span style={{cursor:'pointer'}} onClick={()=>scrollTo('collection')}>Collection</span>
          <span style={{cursor:'pointer'}} onClick={()=>scrollTo('after-dark')}>After Dark</span>
          <span style={{cursor:'pointer'}} onClick={()=>scrollTo('join')}>Join</span>
        </div>

        <div style={{display:'flex', gap:'10px'}}>
          <Heart />
          <ShoppingBag />
        </div>
      </header>

      {/* HERO */}
      <section id="new-in" style={{
        display:'grid',
        gridTemplateColumns:'1fr 1.2fr',
        padding:'80px 40px'
      }}>
        <div>
          <h1 style={{fontSize:'70px'}}>
            Designed to be<br/>unforgettable
          </h1>
          <p style={{marginTop:'20px', color:'#666'}}>
            Soft structure, clean lines, and a darker edge.
          </p>
        </div>

        <div style={{position:'relative', height:'600px'}}>
          <motion.img src={img1}
            style={{position:'absolute', width:'40%', top:0, left:'20%', borderRadius:'28px', boxShadow:'0 25px 60px rgba(0,0,0,0.25)'}}
            animate={{rotate:[0,1.5,-1.5,0], scale:[1,1.02,1]}}
            transition={{duration:10, repeat:Infinity, ease:"easeInOut"}}
          />

          <motion.img src={img2}
            style={{position:'absolute', width:'30%', right:0, top:'20%', borderRadius:'28px', boxShadow:'0 25px 60px rgba(0,0,0,0.25)'}}
            animate={{rotate:[0,-1.5,1.5,0], scale:[1,1.02,1]}}
            transition={{duration:11, repeat:Infinity, ease:"easeInOut"}}
          />

          <motion.img src={img3}
            style={{position:'absolute', width:'25%', bottom:0, left:0, borderRadius:'28px', boxShadow:'0 25px 60px rgba(0,0,0,0.25)'}}
            animate={{rotate:[0,2,-2,0], scale:[1,1.03,1]}}
            transition={{duration:12, repeat:Infinity, ease:"easeInOut"}}
          />

          <motion.img src={img4}
            style={{position:'absolute', width:'20%', bottom:0, right:'20%', borderRadius:'28px', boxShadow:'0 25px 60px rgba(0,0,0,0.25)'}}
            animate={{rotate:[0,-2,2,0], scale:[1,1.02,1]}}
            transition={{duration:13, repeat:Infinity, ease:"easeInOut"}}
          />
        </div>
      </section>

      {/* TRUST */}
      <section id="collection" style={{
        display:'flex',
        justifyContent:'space-around',
        background:'#fff',
        padding:'22px',
        margin:'40px',
        borderRadius:'28px',
        boxShadow:'0 10px 25px rgba(0,0,0,0.05)'
      }}>
        <div>🚚 Free Shipping</div>
        <div>↺ 30-Day Returns</div>
        <div>🛡 Secure Checkout</div>
      </section>

      {/* PRODUCTS */}
      <section style={{
        display:'grid',
        gridTemplateColumns:'1fr 1fr 1fr',
        gap:'20px',
        padding:'40px'
      }}>
        <img src={img1} style={{width:'100%', borderRadius:'28px'}} />
        <img src={img2} style={{width:'100%', borderRadius:'28px'}} />
        <img src={img3} style={{width:'100%', borderRadius:'28px'}} />
      </section>

      {/* TEXT */}
      <section style={{padding:'40px'}}>
        <h2 style={{letterSpacing:'0.2em', color:'#777'}}>COLLECTION</h2>
        <h1 style={{fontSize:'42px'}}>Everyday Icons</h1>
      </section>

      {/* AFTER DARK */}
      <section id="after-dark" style={{
        background:'#111',
        color:'#fff',
        padding:'100px 40px',
        textAlign:'center'
      }}>
        <h1 style={{fontSize:'48px'}}>After Dark</h1>
        <p style={{color:'#aaa'}}>Limited drop. No restocks.</p>
      </section>

      {/* FOOTER */}
      <footer id="join" style={{
        textAlign:'center',
        padding:'50px',
        color:'#777'
      }}>
        © Veloura
      </footer>

    </motion.div>
  );
}