import { Light } from './Light.js';

class RectAreaLight extends Light {

	constructor( color, intensity, width, height ) {

		super( color, intensity );

		Object.defineProperties( this, { isRectAreaLight: { value: true } } );

		this.type = 'RectAreaLight';

		this.width = ( width !== undefined ) ? width : 10;
		this.height = ( height !== undefined ) ? height : 10;

	}

	copy( source ) {

		super.copy( source );

		this.width = source.width;
		this.height = source.height;

		return this;

	}

	toJSON( meta ) {

		const data = super.toJSON( meta );

		data.object.width = this.width;
		data.object.height = this.height;

		return data;

	}

}

export { RectAreaLight };
