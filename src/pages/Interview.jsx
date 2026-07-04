import Button from '../components/Button.jsx';
import { Card } from '../components/Card.jsx';
import Badge from '../components/Badge.jsx';
import { interviewQuestions, user } from '../data/mockData.js';

export default function Interview() {
  return (
    <div className="page-content">
      <div className="page-title-row">
        <div>
          <h1>Interview Preparation</h1>
          <p className="muted">{user.company} · {user.targetRole}</p>
        </div>
        <Button>Practice Next Question</Button>
      </div>

      <div className="metric-grid">
        <Card className="metric-card"><p className="metric-label">Readiness</p><h3>42%</h3><p className="muted">4 of 10 questions completed</p></Card>
        <Card className="metric-card"><p className="metric-label">Questions</p><h3>10</h3><p className="muted">Generated from CV and JD</p></Card>
        <Card className="metric-card"><p className="metric-label">Weak Area</p><h3>Analytics</h3><p className="muted">Practice skill-gap defense</p></Card>
      </div>

      <Card>
        <h2>Recommended Questions</h2>
        <div className="question-list">
          {interviewQuestions.map((q, i) => (
            <div className="question-card" key={q.question}>
              <div>
                <Badge tone={i === 3 ? 'missing' : 'recommended'}>{q.type}</Badge>
                <h3>{i + 1}. {q.question}</h3>
              </div>
              <Button variant="secondary">Practice</Button>
            </div>
          ))}
        </div>
      </Card>

      <Card className="mock-card">
        <h2>Mock Interview</h2>
        <p className="question-prompt">Describe a campaign you managed.</p>
        <textarea className="textarea" placeholder="Type your answer here..." rows={6}></textarea>
        <div className="button-row"><Button>Submit Answer</Button><Button variant="secondary">Record Answer</Button></div>
      </Card>

      <Card className="feedback-card">
        <h2>Sample Feedback</h2>
        <div className="feedback-grid">
          <div><strong>Structure</strong><span>7/10</span></div>
          <div><strong>JD Relevance</strong><span>8/10</span></div>
          <div><strong>Specificity</strong><span>6/10</span></div>
        </div>
        <p className="muted">Your answer is relevant, but it needs more measurable results and a clearer ending. Use STAR: Situation, Task, Action, Result.</p>
      </Card>
    </div>
  );
}
