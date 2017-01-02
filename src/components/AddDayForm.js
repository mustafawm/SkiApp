import React from 'react';

const tahoeResortsArr = ["Alpine Meadows", "Boreal", "Diamond Peak", "Donner Ski Ranch", "Heavenly", "Homewood", "Kirkwood", "Mt. Rose", "Northstar", "Squaw Valley", "Sugar Bowl"];

class AutoComplete extends React.Component {
    // this will be referenced as 'resort'
    // so resort.value will ref get/set below
    get value() {
        return this.refs.inputResort.value;
    }
    set value(inputVal) {
        this.refs.inputResort.value = inputVal;
    }

    render() {
        return(<div>
            <input type='text' list='tahoe-resorts' ref="inputResort" />

            <datalist id='tahoe-resorts'>
                {this.props.options.map( (opt, idx) =>
                    <option key={idx}> {opt} </option>
                )}
            </datalist>
        </div>);
    }
}

export default class AddDayForm extends React.Component {

    onSubmit = (e) => {
        e.preventDefault();

        let nDay = {
            resort: this.refs.resort.value,
            date: this.refs.date.value,
            powder: this.refs.powder.checked,
            backcountry: this.refs.backcountry.checked
        };

        this.props.addNewDay(nDay);

        this.refs.resort.value = '';
        this.refs.date.value = '';
        this.refs.powder.checked = false;
        this.refs.backcountry.checke = false;
    };

    render() {
        const { resort, date, powder, backcountry } = this.props;

        return(<form className="add-day-form" onSubmit={this.onSubmit}>
            <label htmlFor="resort">Resort Name</label>
            <AutoComplete options={tahoeResortsArr}
                   defaultValue={resort} ref="resort"
            />

            <label htmlFor="date">Date</label>
            <input id="date" type="date" required
                   defaultValue={date} ref="date"
            />
            <div>
                <input id="powder" type="checkbox"
                    defaultChecked={powder}  ref="powder"
                />
                <label htmlFor="powder">Powder Day</label>
            </div>
            <div>
                <input id="backcountry" type="checkbox"
                    defaultChecked={backcountry} ref="backcountry"
                />
                <label htmlFor="backcountry"> Backcountry Day </label>
            </div>
            <button> Add day </button>
        </form>);
    }
}

AddDayForm.defaultProps = {
    resort: "Krikwood",
    date: "2017-01-14",
    powder: false,
    backcountry: true
};