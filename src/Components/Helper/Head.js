import React from 'react';

const Head = (props) => {
  React.useEffect(() => {
    document.title = props.title + ' CutiCuti - A rede social pro seu pet';
    document
      .querySelector("meta[name='description']")
      .setAttribute('content', props.description || '');
  }, [props]);

  return <></>;
};

export default Head;
