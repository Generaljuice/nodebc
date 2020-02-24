let weekdayNumber = 5;
let message = null;

switch (weekdayNumber)
{
    case 1:
    message = 'Today is Monday';
    break;
    case 2:
        message = 'Today is tuesday';
        break;
        case 3:
            message = 'Today is Wednesday';
            break;
            case 4:
                message = 'Today is Thursday';
                break;
                case 5:
                                    message = 'Today is friday';
                    break;
                    case 6:
                        message = ' Today is Saturday';
                        break;
                        case 7:
                        message = 'Today is Sunday';
                        break;
                        default: 
                        message = 'Silly willy, this is not a daty of the week';

    }

    console.log(message);
