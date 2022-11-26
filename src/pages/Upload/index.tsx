import React from "react";
import { Button, Form } from "../../styles";

export default function Upload() {
    return (
        <Form onSubmit={() => { }}>
            <input type="file" accept=".txt" />

            <Button>
                Enviar
            </Button>
        </Form>
    )
}