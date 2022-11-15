import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
// npm install react-day-picker date-fns

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {

    return (
        <header>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} alt='' className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='mr-20'>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        ></DayPicker>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;