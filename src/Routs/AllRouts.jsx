import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home';
import MainLayout from "../Layouts/MainLayout";
import About from "../Pages/About/About";
import Blogs from "../Pages/Blogs/Blogs";
import Donation from "../Pages/Donation/Donation";
import Festivals from "../Pages/Festivals/Festivals";
import Gallery from "../Pages/Gallery/Gallery";
import PrivacyPolicy from "../Pages/Privacy-policy/PrivacyPolicy";
import Programmes from "../Pages/Programmes/Programmes";
import Recidency from "../Pages/Recidency/Recidency";
import TermsAndConditions from "../Pages/Terms-and-Conditions/TermsAndContions";
import Trips from "../Pages/Trips/Trips";
import AdminLayout from "../Layouts/AdminLayout"
import Admin from '../Admin/Admin';
import NotFound from '../Pages/NotFound/NotFound';
import AllForms from '../Components/Forms/AllForms';
import AdminYogaForm from '../Admin/AdminYoga/AdminYogaForm';
import YogaForHappiness from '../Pages/YogaForHappiness/YogaForHappiness';
import AdminYogadata from '../Admin/AdminYoga/AdminYogadata';
import AdminSecretForm from '../Admin/AdminSecret/AdminSecretForm';
import AdminSecretData from '../Admin/AdminSecret/AdminSecretData';
import AdminMindControlForm from '../Admin/AdminMindControl/AdminMindControlForm';
import AdminMindControlData from '../Admin/AdminMindControl/AdminMindControlData';
import AdminYogaDataSingle from '../Admin/AdminYoga/AdminYogaDataSingle';
import AdminSecretDataSingle from '../Admin/AdminSecret/AdminSecretDataSingle';
import AdminMindControlSingle from '../Admin/AdminMindControl/AdminMindControlSingle';
const AllRouts = () => {
  return (
    <>
        <Routes>
            <Route element={<MainLayout/>}>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/about' element={<About/>}/>
                  <Route path='/blogs' element={<Blogs/>}/>
                  <Route path='/donation' element={<Donation/>}/>
                  <Route path='/festivals' element={<Festivals/>}/>
                  <Route path='/gallery' element={<Gallery/>}/>
                  <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
                  <Route path='/programmes' element={<Programmes/>}/>
                  <Route path='/recidency' element={<Recidency/>}/>
                  <Route path='/terms-and-conditions' element={<TermsAndConditions/>}/>
                  <Route path='/trips' element={<Trips/>}/>
                  <Route path='/allforms' element={<AllForms/>}/>
                  <Route path='/yogaForHappiness' element={<YogaForHappiness/>} />
                  <Route path='*' element={<NotFound/>}/>
            </Route>

            <Route element={<AdminLayout/>}>
                  <Route path='/admin' element={<Admin/>}/>
                  <Route path='/admin/yoga/createForm' element={<AdminYogaForm/>} />
                  <Route path='/admin/yoga/data' element={<AdminYogadata/>} />
                  <Route path='/admin/yoga/data/:id' element={<AdminYogaDataSingle/>}/>
                  <Route path='/admin/secret/createForm' element={<AdminSecretForm/>} />
                  <Route path='/admin/secret/data' element={<AdminSecretData/>} />
                  <Route path='/admin/secret/data/:id' element={<AdminSecretDataSingle/>}/>
                  <Route path='/admin/mindControl/createForm' element={<AdminMindControlForm/>} />
                  <Route path='/admin/mindControl/data' element={<AdminMindControlData/>} />
                  <Route path='/admin/mindControl/data/:id' element={<AdminMindControlSingle/>}/>
            </Route>
        </Routes>
    </>
  )
}

export default AllRouts