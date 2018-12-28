import Rete from 'rete';
import VectorControlView from './VectorControlView.vue';

export class VectorControl extends Rete.Control {
    constructor(emitter, key, readOnly = false) {
        console.log(`VectorControl constrtuctor, read only: ${readOnly}`);
        super(key);
        this.render = 'vue';
        this.component = VectorControlView;
        this.props = { emitter, vkey: key, readOnly };
    }

    setValue(val) {
        console.log(`VectorControl setValue to ${val}`);
        this.vueContext.value = val;
    }
};
