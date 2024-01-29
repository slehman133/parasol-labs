import { FormData } from "@/app/components/Form/contact";

//email util. --Kaeden
export function sendEmail(data: FormData) {
    //TODO: actually sending shit
    const apiEndpoint = '/api/email';

    fetch(apiEndpoint, {
        method: 'POST',
        body: JSON.stringify(data),
    })
        .then((res) => res.json())
        .then((response) => {
            alert(response.message);
        })
        .catch((err) => {
            alert(err);
        });
}


