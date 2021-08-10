import React, { useState, useContext, useEffect} from 'react';
import Background from './components/Background';
import Data from './data'

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [count, setCount] = useState(1);
  const [state, setState] = useState();
  const [sideNav, setSideNav] = useState(false);
  const [searchPage, setSearchPage] = useState(false);
  const [data, setData] = useState([])
  const [query, setQuery] = useState();

    

    

  useEffect(() => {
      const setBackground = () => {
          
            switch (count) {
                case 1:
                  setState(<Background fig='one'
                    caption='Gear Up'
                    heading='Best Prices on Sports Equipment'
                    btnText='Start Shopping'
                  />)
                  break;
                case 2:
                  setState(<Background fig='two'
                    caption='Court Equip'
                    heading='New Arrivals for Tennis'
                    btnText='New Arrivals'
                  />)
                  break;
                case 3:
                  setState(<Background fig='three'
                    caption='Get Creative'
                    heading='Submissions for Blog Posts'
                    btnText='View Post'
                  />)
                  break;
                case 4:
                  setState(<Background fig='four'
                    caption='Tokyo 2020'
                    heading='25 July 2021 – 7 August 2021'
                    btnText='View Post'
                  />)
                  break;
                case 5:
                  setState(<Background fig='five'
                    caption='Make an Impact'
                    heading='Community Stadium Volunteer'
                    btnText='View Opening'
                  />)
                  break;
                default:
            }
    
        }
        const timer = setInterval(() => {
          if (count <= 4) {
            setCount(count + 1)
          } else {
            setCount(1)
          }
        }, 5000);
      setBackground()
      return () => clearInterval(timer);
  }, [count])

  useEffect(()=> {
    const Searched = Data.filter((val)=>
      val.category.includes(query)
    )

    setData(Searched)
  },[query])

  const next = () => {
      if (count <= 4) {
          setCount(count + 1)
      } else {
          setCount(1)
      }
  }

  const prev = () => {
      if (count > 1) {
          setCount(count - 1)
      } else {
          setCount(5)
      }
  }
  const openNav = () => {
    setSideNav(true)
  }

  const closeNav = () => {
    setSideNav(false);
  }

  const openSearch = () => {
    setSearchPage(true)
  }

  const closeSearch = () => {
    setSearchPage(false);
  }
    

  return (
    <AppContext.Provider
      value={{
        state,
        count,
        next,
        prev, 
        sideNav, 
        openNav, 
        closeNav,
        data,
        query,
        setQuery,
        openSearch,
        closeSearch,
        searchPage
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
