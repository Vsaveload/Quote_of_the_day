import React, { useState } from 'react';

export default function App() {
  const [response, setResponse] = useState({});
  const [responseValues, setresponseValues] = useState([]);
  const [responseKeys, setResponseKeys] = useState([]);
  const [fetchInstructions, setFetchInstructions] = useState({
    adress: null,
    options: null,
  });

  const getQuote = async () => {
    if (fetchInstructions.adress === null || fetchInstructions.options === null) {
      alert('Select quote sourse!');
    } else {
      await fetch(fetchInstructions.adress, fetchInstructions.options)
        .then((res) => res.json())
        .then(async (resp) => {
          console.log(resp);
          if (Array.isArray(resp)) {
            setResponse(resp);
            setresponseValues(Object.values(resp[0]));
            setResponseKeys(Object.keys(resp[0]));
          } else {
            setResponse(resp);
            setresponseValues(Object.values(resp));
            setResponseKeys(Object.keys(resp));
          }
        })
        .catch((err) => alert.error(err));
    }
  };

  function smartMapKeys(arr) {
    return arr.map((el) => {
      if (el instanceof Object) {
        return Object.keys(el).smartMapKeys(el);
      }
      return <p key={el}>{el}</p>;
    });
  }

  function smartMapValues(arr) {
    return arr.map((el) => {
      if (Array.isArray(el)) {
        return smartMapValues(el);
      } if (el instanceof Object) {
        return Object.keys(el).smartMapValues(el);
      }
      return <p key={el}>{el}</p>;
    });
  }

  const fetchHandler = (e) => {
    const value = JSON.parse(e.target.value);
    setFetchInstructions({ adress: value.adress, options: value.options });
  };
  return (
    <div>
      <blockquote className="blockquote text-center">
        <p className="display-1">QUOTE OF THE DAY</p>
        <footer className="blockquote-footer">
          and some other stuff
        </footer>
      </blockquote>
      <div className="d-flex justify-content-center">
        <buton type="button" onClick={getQuote} className="double-border-button">Get a quote</buton>
        <select onChange={fetchHandler} name="fetchOptions" id="inputState" className="double-border-button b" aria-label="Default select example">
          <option hidden> Select quote sourse</option>
          <optgroup label="Quotes">
            <option value={JSON.stringify({
              adress: 'https://famous-quotes4.p.rapidapi.com/random?category=all&count=1',
              options: {
                method: 'GET',
                headers: {
                  'X-RapidAPI-Key': '6f98254c30msh1d441ffe37bc1e9p17c4cajsncf39097e2bb2',
                  'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com',
                },
              },
            })}
            >
              Famous Quotes
            </option>
            <option value={JSON.stringify({
              adress: 'https://brooklyn-nine-nine-quotes.p.rapidapi.com/api/v1/quotes/random/from',
              options: {
                method: 'GET',
                headers: {
                  'X-RapidAPI-Key': '6f98254c30msh1d441ffe37bc1e9p17c4cajsncf39097e2bb2',
                  'X-RapidAPI-Host': 'brooklyn-nine-nine-quotes.p.rapidapi.com',
                },
              },
            })}
            >
              Brooklyn Nine Nine Quotes
            </option>
            <option value={JSON.stringify({
              adress: 'https://quotes15.p.rapidapi.com/quotes/random/',
              options: {
                method: 'GET',
                headers: {
                  'X-RapidAPI-Key': '6f98254c30msh1d441ffe37bc1e9p17c4cajsncf39097e2bb2',
                  'X-RapidAPI-Host': 'quotes15.p.rapidapi.com',
                },
              },
            })}
            >
              Quotes By Martin Svoboda
            </option>
            <option value={JSON.stringify({
              adress: 'https://movie-and-tv-shows-quotes.p.rapidapi.com/quotes/random/quote',
              options: {
                method: 'GET',
                headers: {
                  'X-RapidAPI-Key': '6f98254c30msh1d441ffe37bc1e9p17c4cajsncf39097e2bb2',
                  'X-RapidAPI-Host': 'movie-and-tv-shows-quotes.p.rapidapi.com',
                },
              },
            })}
            >
              Movie and TV shows Quotes
            </option>
            <option value={JSON.stringify({
              adress: 'https://love-quote.p.rapidapi.com/lovequote',
              options: {
                method: 'GET',
                headers: {
                  'X-RapidAPI-Key': '6f98254c30msh1d441ffe37bc1e9p17c4cajsncf39097e2bb2',
                  'X-RapidAPI-Host': 'love-quote.p.rapidapi.com',
                },
              },
            })}
            >
              Love quote
            </option>
            <option value={JSON.stringify({
              adress: 'https://inspiring-quotes.p.rapidapi.com/random',
              options: {
                method: 'GET',
                headers: {
                  'X-RapidAPI-Key': '6f98254c30msh1d441ffe37bc1e9p17c4cajsncf39097e2bb2',
                  'X-RapidAPI-Host': 'inspiring-quotes.p.rapidapi.com',
                },
              },
            })}
            >
              Inspiring quotes
            </option>
            <option value={JSON.stringify({
              adress: 'https://quotel-quotes.p.rapidapi.com/quotes/random',
              options: {
                method: 'POST',
                headers: {
                  'content-type': 'application/json',
                  'X-RapidAPI-Key': '6f98254c30msh1d441ffe37bc1e9p17c4cajsncf39097e2bb2',
                  'X-RapidAPI-Host': 'quotel-quotes.p.rapidapi.com',
                },
                body: '{}',
              },
            })}
            >
              Quotel - Quotes
            </option>
            <option value={JSON.stringify({
              adress: 'https://ai-quotes32.p.rapidapi.com/0',
              options: {
                method: 'GET',
                headers: {
                  'X-RapidAPI-Key': '6f98254c30msh1d441ffe37bc1e9p17c4cajsncf39097e2bb2',
                  'X-RapidAPI-Host': 'ai-quotes32.p.rapidapi.com',
                },
              },
            })}
            >
              AI Quotes
            </option>
            <option value={JSON.stringify({
              adress: 'https://anime-quotes1.p.rapidapi.com/api/random',
              options: {
                method: 'GET',
                headers: {
                  'X-RapidAPI-Key': '6f98254c30msh1d441ffe37bc1e9p17c4cajsncf39097e2bb2',
                  'X-RapidAPI-Host': 'anime-quotes1.p.rapidapi.com',
                },
              },
            })}
            >
              Anime Quotes
            </option>
            <option value={JSON.stringify({
              adress: 'https://motivation-quotes.p.rapidapi.com/ai-quotes',
              options: {
                method: 'GET',
                headers: {
                  'X-RapidAPI-Key': '6f98254c30msh1d441ffe37bc1e9p17c4cajsncf39097e2bb2',
                  'X-RapidAPI-Host': 'motivation-quotes.p.rapidapi.com',
                },
              },
            })}
            >
              Motivation quotes
            </option>
          </optgroup>
          <optgroup label="Other stuff">
            <option value={JSON.stringify({
              adress: 'https://random-facts2.p.rapidapi.com/getfact',
              options: {
                method: 'GET',
                headers: {
                  'X-RapidAPI-Key': '6f98254c30msh1d441ffe37bc1e9p17c4cajsncf39097e2bb2',
                  'X-RapidAPI-Host': 'random-facts2.p.rapidapi.com',
                },
              },
            })}
            >
              Get fact
            </option>
            <option value={JSON.stringify({
              adress: 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random',
              options: {
                method: 'GET',
                headers: {
                  accept: 'application/json',
                  'X-RapidAPI-Key': '6f98254c30msh1d441ffe37bc1e9p17c4cajsncf39097e2bb2',
                  'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com',
                },
              },
            })}
            >
              Chuck Norris jokes!
            </option>
          </optgroup>
        </select>
      </div>
      <div className="h-100 d-flex align-items-center justify-content-center " style={{ margin: '70px' }}>
        <h2>
          {Array.isArray(response)
            ? response[0]?.text || response[0]?.quote || response[0]?.value || response[0]?.Fact
            : response?.text || response?.quote || response?.value || response?.Fact}
        </h2>
      </div>
      <div className="d-flex justify-content-around">
        <div className="d-flex flex-column">
          {smartMapKeys(responseKeys)}
        </div>
        <div className="d-flex flex-column">
          {smartMapValues(responseValues)}
        </div>
      </div>
    </div>
  );
}
