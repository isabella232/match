import * as React from "react";
import * as renderer from "react-test-renderer";
import { Wombat } from "../src";

describe('Wombat', () => {
    it('it should render Wombat with the color chocolate', (): void => {
        const tree = renderer
            .create(
                <Wombat droppings={["🌯", "🍦", "🍔"]} color="chocolate" />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});