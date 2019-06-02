module.exports = (sequelize, DataTypes) => {
    const Story = sequelize.define('Story', {
        User: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Story: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    return Story;
}