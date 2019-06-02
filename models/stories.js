module.exports = (sequelize, DataTypes) => {
    const Story = sequelize.define('Story', {
        User: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Story: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    }, {
        timestamps: false,
    });

    return Story;
}