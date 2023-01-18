// ./src/App.js
import { useEffect, useState } from 'react';

const TrybeMail = ({ ...props }) => {
  const { emails } = props;

  const [readEmails, setReadEmails] = useState([]);
  useEffect(() => {
    console.log('haha');
  }, [readEmails]);

  function checkRead (el) {
    // console.log('haha')
    if (readEmails.find((element) => element.id === el.id)) {
      return 'black';
    }
    return 'red';
  }

  const setAllUnreal = () => {
    return setReadEmails([]);
  };

  const setAllRead = () => {
    setReadEmails(emails);
    return window.alert('parabéns ! Voce leu tudo!');
  };

  const read = (element) => {
    return setReadEmails(emails.filter((el) => el.id === element.id).concat(readEmails));
  };

  const noread = (element) => {
    const unread = readEmails.find((el) => el.id === element.id);
    if (unread) {
      return setReadEmails(readEmails.filter((el) => el.id !== element.id)
      );
    }
  };

  return (
  <div>
      <header>TrybeMail</header>
      {' '}
      <button onClick={ setAllRead } >Marcar todas  como lida</button>
      <button onClick={setAllUnreal}>Marcar todas  como não lida</button>
      {' '}
      <div>
        {
          emails.map((element) => {
            return (
            <div key={element.id}>
              <h3 style={{ color: checkRead(element) }}>
                {element.title}
              </h3>
              <button
              onClick={() => read(element)}>Lida</button>
              <button onClick={() => noread(element)}>Não Lido</button>

            </div>
            );
          })
        }
      </div>

    </div>
  );
};
export default TrybeMail;
