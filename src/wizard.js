import React from 'react'
import styled from 'styled-components'

const WizardWrap = styled.ol`
    border-collapse: separate;
    display: table;
    margin-left: 0px;
    position: relative;
    table-layout: fixed;
    text-align: center;
    vertical-align: middle;
    padding-left: 0;
    padding-top: 20px;
`

const Step = styled.div`
    border-radius: 50%;
    font-size: 18px;
    height: 50px;
    line-height: 50px;
    margin: 0 auto;
    position: relative;
    width: 50px;
    z-index: 1;
`

const Caption = styled.div`
  padding: 11px 16px;
  font-size: 12px;
`

const Item = styled.li`
    display: table-cell;
    position: relative;
    float: none;
    padding: 0;
    width: 1%;

    &:after {
        background-color: ${({complete, completeColor, lowlightColor}) => complete ? completeColor : lowlightColor};
        content: "";
        display: block;
        height: 1px;
        position: absolute;
        width: 100%;
        top: 25px;;
    }

    &:after {
        left: 50%;
    }

    &:last-child {
        &:after {
            display: none;
        }
    }

    ${Step} {
      background-color: ${({stepColor}) => stepColor};
      border: 1px solid ${({active, highlightColor, lowlightColor}) => active ? highlightColor : lowlightColor};
      color: ${({active, highlightColor, lowlightColor}) => active ? highlightColor : lowlightColor};
    }

    ${Caption} {
      color: ${({active, highlightColor, lowlightColor}) => active ? highlightColor : lowlightColor};
    }
`

const Wizard = ({
  steps = [], highlightColor = `#333`, lowlightColor = `#ccc`, completeColor = `#eee`, stepColor = `#fff`}) =>
    <WizardWrap>
      {steps.map(({label, icon, active}, i) =>
        <Item key={i} active={active}
          highlightColor={highlightColor} lowlightColor={lowlightColor} stepColor={stepColor}>
          <Step>
            <i className={`fa fa-${icon}`} />
          </Step>
          <Caption className='hidden-xs hidden-sm'>
            <span>{label}</span>
          </Caption>
        </Item>)}
    </WizardWrap>

export default Wizard
