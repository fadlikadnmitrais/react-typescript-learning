import * as React from "react";
import NotFound from "../../index";
import {RenderResult, render} from "@testing-library/react";

let documentBody: RenderResult;

describe('<NotFound/>', () => {
    beforeEach(() => {
        documentBody = render(<NotFound/>);
    });

    it('matches snapshot', () => {
        const { baseElement } = documentBody;
        expect(baseElement).toMatchSnapshot();
    });
});