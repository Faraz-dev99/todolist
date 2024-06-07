import { useState, createContext, useEffect } from 'react';
import './App.css';
import Footer from './components/Footer'
import Header from './components/Header'
import CreateNote from './components/CreateNote';
import Note from './Note';

const HeaderBgContext = createContext();

function App() {

  //theme states
  const [bgcolor, setBgColor] = useState('#060E17');
  const [txtcolor, setTxtColor] = useState('white');
  const [headerbg, setHeaderBg] = useState('#A5B9CF');//#E9EEEF
  const [boxShadow, setBoxShadow] = useState('0 5px 6px 4px rgba(0,0,0,.2)');
  const [themelabel, setThemeLabel] = useState(true);




  const [additem, setAddItem] = useState(()=>{
    const storednotes = JSON.parse(localStorage.getItem('notes'));
    
    if (storednotes) {
      return storednotes
    }
    else{
      return []
    }
  });
  

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(additem))
  }, [additem]);

  

  //changing theme ui
  useEffect(() => {
    if (themelabel) {
      setBgColor('#ECEEEF');
      setTxtColor('black');
      setHeaderBg('#D3E5F4')
      setBoxShadow('0 5px 6px 4px rgba(0,0,0,.2)')
    }
    else {
      setBgColor('#060E17');
      setTxtColor('white');
      setHeaderBg('#30C1DE')
      setBoxShadow('0 3px 4px 2px #2E4053')
    }
  }, [themelabel])

  function changetheme() {
    themelabel ? setThemeLabel(false) : setThemeLabel(true);
  }

  /* */

  function addnote(note) {
    if (note.title != "" || note.content != "") {
      setAddItem((prev) => {
        return [...prev, note];
      })
    }


  }



  function deletitem(id) {
    setAddItem((prev) => {
      return additem.filter((e, i) => {
        return i != id;
      })
    })
  }

  return (
    <>
      <HeaderBgContext.Provider
        value={{
          headerbg: headerbg,
          txtcolor: txtcolor,
          bgcolor: bgcolor,
          boxShadow: boxShadow
        }}
      >
        <div className='flex flex-col min-h-screen w-full' style={{ backgroundColor: bgcolor, color: txtcolor }}>
          <Header theme={changetheme} />
          <CreateNote
            bgcolor={bgcolor}
            boxShadow={boxShadow}
            addnote={addnote}
          />
          
          <div className='flex flex-wrap mt-16 gap-6'>
            {
              additem.map((e, i) => {
                return <Note
                  key={i}
                  deletitem={deletitem}
                  id={i}
                  title={e.title}
                  content={e.content}
                  day={e.day}
                  month={e.month}
                  year={e.year}
                />
              })
            }
          </div>

          <Footer />
        </div>
      </HeaderBgContext.Provider>
    </>
  );
}

export default App;
export { HeaderBgContext }
