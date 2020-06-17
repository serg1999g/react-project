import React, {} from 'react';
import Banner from "components/ui/Banner";
import background from 'assets/images/turtle_bg.jpg';

const SeaTurtle = (
    {}
) => {

    return (
        <main>
            <Banner background={background}/>
            <div className="container">
                <p className='mb-3 mt-3'>
                    All seven species of sea turtles in the world are declining at an alarming rate, the majority of
                    which are already classified as endangered. Sea turtles face slim odds at an early age, with only
                    one in 5,000 ever reaching adulthood. Those lucky few that do make it, reproduce extremely slowly
                    and must deal with habitat destruction, entanglement in fishing gear, and being poached for their
                    eggs, meat, skin, and shells.
                </p>
                <p className='mb-3'>
                    Although nearly any country with a coastline and a turtle population will have some type of sea
                    turtle conservation effort, Costa Rica is the most common country for sea turtle conservation
                    volunteering abroad. Since eating and selling turtle parts is very much ingrained culturally and
                    economically in the lives of locals, conservation efforts grant a lot of focus to creating
                    sustainable solutions that are mutually beneficial for both the human and turtle populations in
                    Costa Rica. Collecting data for research, rehabilitating injured adults, operating hatcheries, and
                    assisting hatchlings on their journey to sea are all important duties volunteers can expect to
                    perform as well.
                </p>
            </div>
        </main>
    );
};

export default SeaTurtle;