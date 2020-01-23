import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Mail from '../../lib/Mail';

class CancellationMail {
    get key() {
        return 'NewTicker';
    }

    async handle({ data }) {
        const { ticket } = data;
        await Mail.sendMail({
            to: `${ticket.provider.name} <${ticket.provider.email}>`,
            subject: 'Um novo chamado foi aberto',
            template: 'newticket',
            context: {
                provider: ticket.provider.name,
                user: ticket.user.name,
                date: format(
                    parseISO(ticket.date),
                    "'dia' dd 'de' MMMM', às' H:mm'h'",
                    {
                        locale: pt,
                    }
                ),
            },
        });
    }
}

export default new CancellationMail();
