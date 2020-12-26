import { LightShadow } from './LightShadow.js';
import { OrthographicCamera } from '../cameras/OrthographicCamera.js';

class DirectionalLightShadow extends LightShadow {

	constructor() {

		super( new OrthographicCamera( - 5, 5, 5, - 5, 0.5, 500 ) );

		Object.defineProperty( this, 'isDirectionalLightShadow', { value: true } );

	}

	updateMatrices( light ) {

		LightShadow.prototype.updateMatrices.call( this, light );

	}

}


export { DirectionalLightShadow };
