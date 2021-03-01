import { locations } from './locations.js'

export function router() {
    routie('spot1', function () {
        console.log('test1')
    });
    routie('spot2', function () {
        console.log('test2')
    });
    routie('spot3', function () {
        console.log('test3')
    });
    routie('spot4', function () {
        console.log('test4')
    });
    routie('spot5', function () {
        console.log('test5')
    });
};

router()

