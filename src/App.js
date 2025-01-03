import './App.css';
import { useState } from 'react';
import iLoveYou from './gifs/icegif-347-ezgif.com-loop-count.gif';
import bearKiss from './gifs/bear-kiss-bear-kisses.gif';

const phrases = [
  'No',
  'Are you sure?',
  'Really sure?',
  'Please rethink it.',
  'Think again!',
  'Last chance',
  'Surely not?',
  'You might regret this!',
  'Give it another thought',
  'Are you absolutely certain?',
  'This could be a mistake!',
  'Have a heart!',
  'Dont be so cold!',
  'Change of heart?',
  "Wouldn't you reconsider?",
  'Is this your finall answer?',
  "Don't do this to me",
  "I'm gonna cry...",
  'Please...',
  "you're breaking my heart ;(",
  'Fine I will!',
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesWasClicked, setYesWasClicked] = useState(false);
  const [loopGif, setLoopGif] = useState(iLoveYou);
  const yesBtnSize = noCount * 20 + 20;

  // setLoopGif('');
  setTimeout(() => {
    setLoopGif(iLoveYou);
  }, 0);

  const yesBtnHandler = (e) => {
    e.preventDefault();
    setYesWasClicked(true);
  };

  const noBtnHandler = (e) => {
    e.preventDefault();
    setNoCount(noCount + 1);
    if (noCount === 20) {
      yesBtnHandler(e);
    }
  };

  const getNoBtnText = () => {
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="container">
      {!yesWasClicked ? (
        <>
          <div className="img-wrapper">
            <img src={loopGif} alt="Bear in love" />
          </div>
          <div className="text">Will You be my valentine?</div>
          <div className="buttons-wrapper">
            <button
              className="button yes"
              style={{ fontSize: yesBtnSize }}
              onClick={yesBtnHandler}
            >
              Yes!
            </button>
            <button
              className={`button no ${noCount === 20 && 'yes'}`}
              onClick={noBtnHandler}
            >
              {getNoBtnText()}
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="img-wrapper">
            <img src={bearKiss} alt="bears are kissing" />
            <div className="text">Yeaay!!!!</div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
