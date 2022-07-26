CREATE DATABASE ChoreChartDatabase

GO
USE ChoreChartDatabase
CREATE TABLE [dbo].[Chores] (
    [Id]          INT           IDENTITY (1, 1) NOT NULL,
    [Name]        NVARCHAR (50) NULL,
    [Description] NVARCHAR (50) NULL,
    [Priority]    INT           NULL,
    [IsDone]      INT           NULL,
    [DateToDo]    DATETIME      NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC)
);