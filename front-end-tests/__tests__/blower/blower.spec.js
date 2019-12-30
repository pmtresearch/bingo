/**
 * Created by Mihail on 10/1/2016.
 */

'use strict';

import Blower from '../../../src/blower/blower';
import { expect } from 'chai';

describe('Blower module', () => {
	test('Should create a blower module', (done) => {
		let el = document.createElement('canvas');
		const blower = new Blower(el);
		expect(blower).not.to.be.undefined;
		done();
	});

	test('Should initwith stopped animation', (done) => {
		let el = document.createElement('canvas');
		let blower = new Blower(el);
		expect(blower.init).to.be.object;
		expect(blower.init).to.have.property('play').that.is.falsy;
		expect(blower.init).to.have.property('isPlaying').that.is.falsy;
		done();
	});

	test('Should create an array with 75 ball objects', (done) => {
		let el = document.createElement('canvas');
		let blower = new Blower(el);
		expect(blower.balls).to.be.an('array');
		expect(blower.balls.length).to.be.eql(75);
		done();
	});

	test('Should have mechanism for starting the animation', (done) => {
		let el = document.createElement('canvas');
		let blower = new Blower(el);
		expect(blower.startAnimation).to.be.function;
		done();
	});

	test('Should have mechanism for stopping the animation', (done) => {
		let el = document.createElement('canvas');
		let blower = new Blower(el);
		expect(blower.stopAnimation).to.be.function;
		done();
	});
});