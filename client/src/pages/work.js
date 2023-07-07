import {Outlet,useNavigation} from 'react-router-dom';
import MainNavigation from '../components/MainNavigation'


function WorkLayout() {
    const navigation = useNavigation();

    
   return (
    <>

  
   <main>
    {/* navigation.state === 'loading' && <p>Loading...</p> */}
   <Outlet />
   </main>
   
   </>
   )
}

export default WorkLayout;