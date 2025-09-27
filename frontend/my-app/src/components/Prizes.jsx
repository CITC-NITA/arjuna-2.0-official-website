
import '../styles/prizes.css';
import bg from "../assets/about-bg.jpg";

const Prizes = () => {
  

  return (
    <section id="prizes" className='section' style={{backgroundImage:`url(${bg})`}}>
      <h2>Grand Finale</h2>
      <ul>
        <li>One winning team per problem statement</li>
        <li>Prize: ₹25,000 per winning team</li>
        <li>Final decision by judging panel</li>
        <li>Out-of-the-box ideas encouraged</li>
      </ul>
    </section>
  );
};

export default Prizes;
