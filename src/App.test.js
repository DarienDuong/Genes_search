import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import Table from './Table'
import Gene from './Gene'
import Form from './Form'
import AutoGene from './AutoGene'
import AutoCompleteSection from './AutoCompleteSection'
import { shallow, mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom'

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<Home />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

it('Table component matches its snapshot with variants prop', () =>{
  const variants = [{
    gene: "BRCA1",
    nucleotide_change: "NM_007294.3:c.389A>T",
    protein_change: "p.Tyr130Phe",
    alias: null,
    region: "NM_007294.3:Ex6",
    reported_classification: "Uncertain significance",
    last_evaluated: "2014-03-03",
    last_updated: "2017-09-14",
    source: "ClinVar",
    url: "https://www.ncbi.nlm.nih.gov/clinvar/RCV000152869"
    }, {
      gene: "BRCA1",
      nucleotide_change: "NM_007294.3:c.389A>T",
      protein_change: "p.Tyr130Phe",
      alias: null,
      region: "NM_007294.3:Ex6",
      reported_classification: "Uncertain significance",
      last_evaluated: "2014-03-03",
      last_updated: "2017-09-14",
      source: "ClinVar",
      url: "https://www.ncbi.nlm.nih.gov/clinvar/RCV000152869"
    }]

  const wrapper = shallow(<Table variants={variants} />)

  expect(wrapper).toMatchSnapshot();
})

it('Table component should render one table', () =>{
  const variants = [{
    gene: "BRCA1",
    nucleotide_change: "NM_007294.3:c.389A>T",
    protein_change: "p.Tyr130Phe",
    alias: null,
    region: "NM_007294.3:Ex6",
    reported_classification: "Uncertain significance",
    last_evaluated: "2014-03-03",
    last_updated: "2017-09-14",
    source: "ClinVar",
    url: "https://www.ncbi.nlm.nih.gov/clinvar/RCV000152869"
    }, {
      gene: "BRCA1",
      nucleotide_change: "NM_007294.3:c.389A>T",
      protein_change: "p.Tyr130Phe",
      alias: null,
      region: "NM_007294.3:Ex6",
      reported_classification: "Uncertain significance",
      last_evaluated: "2014-03-03",
      last_updated: "2017-09-14",
      source: "ClinVar",
      url: "https://www.ncbi.nlm.nih.gov/clinvar/RCV000152869"
    }]

  const wrapper = shallow(<Table variants={variants} />)

  expect(wrapper.find('table')).toHaveLength(1);
})


it('Table component should render one', () => {
  const emptyVariants = []
  const wrapper = shallow(<Table variants={emptyVariants} />)
  expect(wrapper).toMatchSnapshot();
})


// it('Gene component matches its snapshot', () => {
//   const name = {params: {
//   	name: 'BRCA1'
//   }}

//   const wrapper = shallow(<Gene match={name} />)
//   expect(wrapper).toMatchSnapshot();
// })


it('Form component matches its snapshot', () => {
  const wrapper = shallow(<Form />)
  expect(wrapper).toMatchSnapshot();
})

var BrowserForm = <BrowserRouter><Form /></BrowserRouter>

it('Form component to have a form', () => {
  const wrapper = mount(BrowserForm)
  expect(wrapper.find('form')).toHaveLength(1);
})

it('AutoGene component to match its snapshot', () => {
  const wrapper = shallow(<AutoGene />)
  expect(wrapper).toMatchSnapshot();
})

it('AutoCompleteGene component to match its snapshot', () => {
  const wrapper = shallow(<AutoCompleteSection autocomplete={""}/>)
  expect(wrapper).toMatchSnapshot();
})

it('AutoCompleteGene component to match its snapshot with results', () => {
  const result = [{gene: 'brca1'}, {gene: 'brca2'}]
  const wrapper = shallow(<AutoCompleteSection autocomplete={result} />)
  expect(wrapper).toMatchSnapshot();
})



