import Sequelize, { Model } from 'sequelize';

class Ticket extends Model {
    static init(sequelize) {
        super.init(
            {
                client_id: Sequelize.INTEGER,
                service_id: Sequelize.INTEGER,
                status: Sequelize.INTEGER,
            },
            {
                sequelize,
            }
        );

        return this;
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'client_id', as: 'client' });
        this.belongsTo(models.User, {
            foreignKey: 'provider_id',
            as: 'provider',
        });
    }
}

export default Ticket;
