require_once 'sms.ru.php';

$smsru = new SMSRU('B9780512-1BAF-FA43-B132-18AC4B86E9B0')

$data = new stdClass();
$data->to = '79181981869';
$data->text = 'Новая заявка';
$data->test = 1;
$sms = $smsru->send_one($data);

if ($sms->status == "OK") {
    echo "Сообщение отправлено успешно. ";
    echo "ID сообщения: $sms->sms_id. ";
    echo "Ваш новый баланс: $sms->balance";
} else {
    echo "Сообщение не отправлено. ";
    echo "Код ошибки: $sms->status_code. ";
    echo "Текст ошибки: $sms->status_text.";
}