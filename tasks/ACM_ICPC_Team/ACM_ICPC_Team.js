/*
  There are a number of people who will be attending ACM-ICPC World Finals.
  Each of them may be well versed in a number of topics.
  Given a list of topics known by each attendee, you must determine the maximum number of topics a 2-person team can know.
  Also find out how many ways a team can be formed to know that many topics.
  Lists will be in the form of bit strings, where each string represents an attendee and each position in that string represents a field of knowledge, 1 if its a known field or 0 if not.
 */

module.exports = (topic) => {
  const playersCount = topic.length;
  let maxScore = 0;
  let countMaxScore = 0;
  
  for (let firstTeamMember = 1; firstTeamMember < playersCount; firstTeamMember++) {
    const firstTeamMemberKnowledge = topic[firstTeamMember - 1];
    for (let secondTeamMember = firstTeamMember + 1; secondTeamMember <= playersCount; secondTeamMember++) {
      const secondTeamMemberKnowledge = topic[secondTeamMember - 1];
      let currentScore = 0;
      for (let i = 0; i < firstTeamMemberKnowledge.length; i++) {
        const first = parseInt(firstTeamMemberKnowledge[i]);
        const second = parseInt(secondTeamMemberKnowledge[i]);
        currentScore = currentScore + (second ? second : first);
      }
      if (currentScore === maxScore) {
        countMaxScore++;
      }
      if (currentScore > maxScore) {
        maxScore = currentScore;
        countMaxScore = 1;
      }
    }
  }
  
  return [
    maxScore,
    countMaxScore,
  ];
};
