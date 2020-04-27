import React, {useState, useRef, useEffect, useContext} from 'react';
import {ThemeContext} from '../../store/ThemeStore';

const ApiKeyPrompt = ({failedKey, setApiKey: submitNewApiKey}) => {
  const {theme} = useContext(ThemeContext);
  const [formApiKey, updateFormApiKey] = useState(failedKey);
  const inputEl = useRef(null);
  useEffect(() => inputEl.current.focus());

  return (
    <section>
      <div className="form-group">
        <label className="mt-3 form-label mb-2">
          Enter an API key in the form of{' '}
          <span
            style={{fontFamily: 'monospace', color: theme.text.sectionTitle}}
          >
            username:password
          </span>
        </label>
        <div className="input mb-3">
          <input
            ref={inputEl}
            type="text"
            className="form-control"
            placeholder={
              'Current key: ' +
              (failedKey || process.env.YOLO_APP_PW || 'no key set')
            }
            onChange={(e) => {
              updateFormApiKey(e.target.value);
            }}
          />
        </div>
        <button
          className="btn"
          onClick={() => {
            submitNewApiKey({apiKey: formApiKey, needsRequest: true});
          }}
          disabled={!formApiKey}
        >
          Update
        </button>
      </div>
    </section>
  );
};

export default ApiKeyPrompt;
