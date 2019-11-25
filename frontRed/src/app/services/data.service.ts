import { Injectable } from '@angular/core';
import { Select2OptionData } from 'ng2-select2';

@Injectable()
export class DataService {

    getTemplateList(): Select2OptionData[] {
        return [
            {
                id: 'temp1',
                text: 'Template 1',
                additional: {
                    image: 'assets/image0.jpg',
                    winner: '4'
                }
            },
            {
                id: 'temp2',
                text: 'Template 2',
                additional: {
                    winner: '3'
                }
            },
            {
                id: 'temp3',
                text: 'Template 3',
                additional: {
                    image: 'assets/image1.jpg',
                    winner: '1'
                }
            },
            {
                id: 'temp4',
                text: 'Template 4',
                additional: {
                    image: 'assets/image2.jpg',
                    winner: '5'
                }
            },
            {
                id: 'temp5',
                text: 'Template 5',
                additional: {
                    image: 'assets/image3.jpg',
                    winner: '2'
                }
            }
        ];
    }

    getChangeList(): Select2OptionData[] {
        return [
            {
                id: '0',
                text: 'Cars',
                children: [
                    {
                        id: 'car1',
                        text: 'Car 1'
                    },
                    {
                        id: 'car2',
                        text: 'Car 2'
                    },
                    {
                        id: 'car3',
                        text: 'Car 3'
                    }
                ]
            },
            {
                id: '0',
                text: 'Planes',
                children: [
                    {
                        id: 'plane1',
                        text: 'Plane 1'
                    },
                    {
                        id: 'plane2',
                        text: 'Plane 2'
                    },
                    {
                        id: 'plane3',
                        text: 'Plane 3'
                    }
                ]
            }
        ];
    }

    getChangeListAlternative(): Select2OptionData[] {
        return [
            {
                id: '0',
                text: 'Cars',
                children: [
                    {
                        id: 'car1',
                        text: 'Car 1 - New'
                    },
                    {
                        id: 'car2',
                        text: 'Car 2 - New'
                    },
                    {
                        id: 'car3',
                        text: 'Car 3 - New'
                    }
                ]
            },
            {
                id: '0',
                text: 'Planes',
                children: [
                    {
                        id: 'plane1',
                        text: 'Plane 1 - New'
                    },
                    {
                        id: 'plane2',
                        text: 'Plane 2 - New'
                    },
                    {
                        id: 'plane3',
                        text: 'Plane 3 - New'
                    }
                ]
            }
        ];
    }
}
