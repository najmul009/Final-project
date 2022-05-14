import { DayPicker } from 'react-day-picker';
import chair from '../../assets/images/chair.png'
import 'react-day-picker/dist/style.css';
import bg from '../../assets/images/bg.png';
import { format } from 'date-fns';


const AppionmentBanner = ({date, setDate}) => {
    
    return (
        <div style={{ background: `url(${bg})`, backgroundSize: "cover" }} className="hero min-h-screen lg:px-20" >
            <div className="hero-content flex-col lg:flex-row-reverse ">
                <img src={chair} className="lg:max-w-lg sm:max-w-sm rounded-lg shadow-2xl " alt='' />
                <div className='text-center shadow-2xl rounded-lg mr-0 lg:mr-20'>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />;
                </div>
            </div>
        </div>
    );
};

export default AppionmentBanner;