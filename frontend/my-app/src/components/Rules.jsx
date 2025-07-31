import '../styles/rules.css';


const rulesData = [
  {
    title: 'Team Formation',
    points: [
      'All team members should be from the SAME college/university; NO inter-college/university teams are allowed. However, members from different branches/domains of the same college/university are encouraged to form a team.',
      'Each team should mandatorily comprise of FOUR members including the team leader.',
      'Presence of at least ONE female member is highly appreciated and encouraged (NOT mandatory).',
    ],
  },
  {
    title: 'Idea Nomination Process',
    points: [
      'After the team leader has registered the team name via the registration form before the deadline, a WhatsApp group will be created for team leaders.',
      'Another form will be shared in the group where team leaders must submit their ideas against a Problem Statement.',
      'Idea submission window is from 11/06/2025 to 25/06/2025. No submissions will be accepted after that.',
      'Submission format will be attached within the registration form itself.',
    ],
  },
  {
    title: 'Grand Finalists Announcement',
    points: [
      'Notifications regarding selected teams will be sent via email to the team leader.',
      'SIX teams per Problem Statement will be selected to compete in the Grand Finale.',
    ],
  },
  {
    title: 'Miscellaneous Information',
    points: [
      "No travel reimbursement will be provided; participants must arrange their own travel.",
      "Accommodation will be provided to non-Agartala participants from 27th to 29th July, 2025.",
      "Food will be provided on these dates for all participants.",
    ],
  },
];

const Rules = () => {
  

  return (
    <section id="rules" className="rules-section">
      <h2>Rules & Guidelines</h2>
      <div className="rules-container">
        {rulesData.map((block, idx) => (
          <div className="rule-block" key={idx}>
            <h3>{block.title}</h3>
            <ul>
              {block.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Rules;
