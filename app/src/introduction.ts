import { ProgressEventArgs } from '@syncfusion/ej2-splitbuttons';
export class Introduction {
    onEnd() {
        alert('End')
    }

    onProgress(pea: CustomEvent) {
        // console.log('Current Duration - ', pea.detail.currentDuration);
        // console.log('Name -', pea.detail.name);
        // console.log('Percent - ', pea.detail.percent);
        // console.log('Step - ', pea.detail.step);
    }
}
