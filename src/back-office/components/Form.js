/* @flow */
import CRUDStore from '../flux/CRUDStore';
import FormInput from './FormInput';
import React, {Component} from 'react';
import type {FormInputField, FormInputFieldValue} from './FormInput';

type Props = {
	readOnly?: boolean,
	recordId: ?number,
};

class Form extends Component {

	fields: Array<Object>;
	initialData: ?Object;

	constructor(props: Props) {
		super(props);
		if (!this.props.fields) {
			this.fields = CRUDStore.getSchema();
		} else {
			this.fields = this.props.fields;
		}

		if ('recordId' in this.props) {
			this.initialData = CRUDStore.getRecord(this.props.recordId);
		}
	}

	getData(): Object {
		let data: Object = {};
		this.fields.forEach((field: FormInputField) =>
			data[field.id] = this.refs[field.id].getValue()
		);
		return data;
	}

	render() {
		const { readOnly } = this.props;

		return (
			<form id="form">{this.fields.map((field: FormInputField) => {
				let prefilled: FormInputFieldValue = '';
				if (this.initialData) {
					prefilled = this.initialData[field.id];
					console.log('>>> prefilled:', prefilled);
				}

				if (!readOnly) {
					return (
						<div className="form-row" key={field.id}>
							<label className="form-label" htmlFor={field.id}>{field.label}:</label>
							<FormInput {...field} ref={field.id} defaultValue={prefilled} readOnlyEmail={this.props.readOnlyEmail}/>
						</div>
					);
				}

				if (!prefilled) {
					return null;
				}

				return (
					<div className="form-row" key={field.id}>
						<span className="form-label">{field.label}:</span>
						{
							<div>{prefilled}</div>
						}
					</div>
				);
			}, this)}</form>
		);
	}
}

export default Form;
