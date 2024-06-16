import Pills from '../Pills/Pills';
import Header from './components/Header';

export default function CommonTools() {
  return (
    <div className="space-y-5">
      <Header>Common Tools</Header>
      <Pills.Tools />
    </div>
  );
}
